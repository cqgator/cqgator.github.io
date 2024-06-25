if (location.protocol !== 'https:') {
    if (location.protocol === 'file:') {
        // Do nothing (don't redirect) if it's a local file
    } else {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
}