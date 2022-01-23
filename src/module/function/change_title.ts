function change_title(title: string) {
  const htmlTitle = document.querySelector("title") as HTMLTitleElement;
  htmlTitle.innerHTML = title + ' | Votemotion';
}

export default change_title;