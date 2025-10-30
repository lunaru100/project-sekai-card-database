import requests
from bs4 import BeautifulSoup
import csv
import time
from urllib.parse import urljoin

BASE = "https://www.sekaipedia.org"
LIST_PAGE = "/wiki/List_of_cards"
HEADERS = {"User-Agent": "sekaipedia-scraper/1.0 (+youremail@example.com)"}


def get_soup(path):
    url = urljoin(BASE, path)
    r = requests.get(url, headers=HEADERS, timeout=20)
    r.raise_for_status()
    return BeautifulSoup(r.text, "html.parser"), url


def gather_card_links():
    soup, url = get_soup(LIST_PAGE)
    # znajdź linki do stron kart
    content = soup.select_one(".mw-parser-output") or soup
    links = []
    for a in content.find_all("a", href=True):
        href = a["href"]
        if href.startswith("/wiki/") and ":" not in href:
            title = a.get_text(strip=True)
            if title != "":
                links.append((title, href))
    seen = set()
    uniq = []
    for t, h in links:
        if h not in seen:
            seen.add(h)
            uniq.append((t, h))
    return uniq


def parse_infobox(soup):
    table = soup.select_one(".infobox")
    img = soup.select(".mw-file-description")
    if not table:
        return {}

    # Pobierz wszystkie wiersze
    data = {}
    for row in table.find_all("tr"):
        th = row.find("th")
        td = row.find("td")
        if th and td:
            label = th.get_text(strip=True).lower()
            value = td.get_text(" ", strip=True)
            if label == 'rarity':
                stars = td.find_all("span")
                for span in stars:
                    if span.find("img"):
                        value = value + "1"
                value = len(value) / 2
            if label == 'associated event':
                label = 'acquisition methods'
                event_element = td.find("a")
                value = event_element.get_text()

            data[label] = value

    for item in img:
        img_raw = item.find("img")
        src = img_raw.get("src", "")
        if src.__contains__("trained_art"):
            data["trained_image"] = src
        elif src.__contains__("_art"):
            data["untrained_image"] = src

    return data


def extract_card_data(card_links, sleep=0.6, limit=None):
    results = []
    for i, (title, href) in enumerate(card_links):
        if limit and i >= limit:
            break
        try:
            soup, page_url = get_soup(href)
        except Exception as e:
            print(f"[!] Błąd pobierania {href}: {e}")
            continue
        info = parse_infobox(soup)
        results.append({
            "title": title,
            "attribute": info.get("attribute", ""),
            "character": info.get("character", ""),
            "event": info.get("acquisition methods", ""),
            "unit": info.get("unit", ""),
            "rarity": info.get("rarity", ""),
            "availability": info.get("status", ""),
            "trained_image": info.get("trained_image", ""),
            "untrained_image": info.get("untrained_image", ""),
            "release_date": info.get("release date", "")
        })
        print(f"[+] Zebrano: {title}")
        time.sleep(sleep)
    return results


def save_csv(rows, filename="sekaipedia_cards_parsed.csv"):
    keys = ["title", "attribute", "character", "event", "unit", "rarity", "availability",
            "trained_image", "untrained_image", "release_date"]
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        for r in rows:
            writer.writerow(r)
    print(f"[✓] Zapisano {len(rows)} rekordów do {filename}")


if __name__ == "__main__":
    print("[*] Pobieram listę kart...")
    links = gather_card_links()
    print(f"[*] Znaleziono {len(links)} unikalnych linków.")
    cards = extract_card_data(links, sleep=0.6, limit=None)
    save_csv(cards)
