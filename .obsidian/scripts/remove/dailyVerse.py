import requests
import bs4

def get_bible_verse():
    url = "https://www.bible.com/pt/verse-of-the-day"
    response = requests.get(url)
    soup = bs4.BeautifulSoup(response.content, "html.parser")

    verse_element = soup.find("a", class_="w-full no-underline dark:text-text-dark text-text-light")
    reference_element = soup.find("p", class_="dark:text-text-dark text-15 font-aktiv-grotesk uppercase font-bold mbs-2 text-gray-25")

    if verse_element and reference_element:
        verse = verse_element.get_text().strip()
        reference = reference_element.get_text().strip()
        print(f"{verse}\n**{reference}**")  # Certifique-se de usar print para a saída
    else:
        print("Versículo do dia não pôde ser recuperado.")

if __name__ == "__main__":
    get_bible_verse()
