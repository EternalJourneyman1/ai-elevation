export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // Adding offset to account for fixed navbar
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};