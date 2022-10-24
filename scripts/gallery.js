var masonry = new Macy({
    container: '#gallery__box',
    trueOrder: false,
    waitForImages: false,
    useOwnImageLoader: false,
    mobileFirst: true,
    columns: 1,
    breakAt: {
        800: 4,
        560: 3,
        500: 2
    },
    margin: {
        y: 8,
        x: 8,
    }
});