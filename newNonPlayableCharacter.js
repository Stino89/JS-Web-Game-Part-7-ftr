function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast() {
        direction = 'east'
        await sleep(time)
        stop()
        element.src = `./assets/red-character/east.gif`
    }

   async function walkNorth() {
        direction = 'north'
        await sleep(time)
        element.src = `./assets/red-character/north.gif`
        stop()
    }

  async  function walkWest() {
        direction = 'west'
        await sleep(time)
        element.src = `./assets/red-character/west.gif`
        stop()
    }

  async  function walkSouth() {
        direction = 'south'
        await sleep(time)
        element.src = `./assets/red-character/south.gif`
        stop()
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}