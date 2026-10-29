export default function smoothScrollTo(id){
    const node= document.getElementById(id);
    if (!node) return;

    window.scrollTo({
        top: node.getBoundingClientRect().top + window.scrollY - 120,
        behavior:"smooth"
    })
}