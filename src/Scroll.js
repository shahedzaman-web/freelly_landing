export default function SmoothScrollTo(containerByID) {
    const node = document.getElementById(containerByID);
  console.log(node)
    window.scrollTo({
        top: node.offsetTop,
        behavior: "smooth"
    });
}