
class Background {
    draw() {
        print("background drawing");
        pongGame.backgroundImages.forEach(img => {
            img.y += 1.1
            image(img.src, img.x, img.y, 600, 500)
            image(img.src, img.x, img.y - 500, 600, 500)

            if (img.y >= 500) {
                img.y = 0;
            }

        })
       /*  image(game.backgroundImages[0].src, 0, 0, width, height)
        image(game.backgroundImages[1].src, 0, 0, width, height)
        image(game.backgroundImages[2].src, 0, 0, width, height)
        image(game.backgroundImages[3].src, 0, 0, width, height)
        image(game.backgroundImages[4].src, 0, 0, width, height) */
    }
}