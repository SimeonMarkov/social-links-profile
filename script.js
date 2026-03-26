const socialNetworkAnchors = document.querySelectorAll('.social-network')
let tabIndex = 1
socialNetworkAnchors.forEach(socialNetworkAnchor => {
    socialNetworkAnchor.setAttribute('tabindex', String(tabIndex++));
})