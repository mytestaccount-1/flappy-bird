const birdElem=document.querySelector('[data-bird]')
const BIRD_SPEED=0.3
const JUMP_DURATION=125
let timeSinceLastJump=Number.POSITIVE_INFINITY

export function setupBird() {
    setTop(window.innerHeight/2)    
    if(screen.width>=800){
        document.removeEventListener('keydown',handleJump)
        document.addEventListener('keydown',handleJump)
    }
    else{
        document.removeEventListener('touchdown',handleJumpTs)
        document.addEventListener('touchdown',handleJumpTs)
    }
}

export function updateBird(delta) {
    if(timeSinceLastJump<JUMP_DURATION){
        setTop(getTop()-BIRD_SPEED*delta)
    }
    else{
        setTop(getTop()+BIRD_SPEED*delta)
    }
    
    timeSinceLastJump+=delta
}

export function getBirdRect() {
    return birdElem.getBoundingClientRect()
}

function setTop(top) {
    birdElem.style.setProperty("--bird-top",top)    
}

function getTop() {
    return parseFloat(getComputedStyle(birdElem).getPropertyValue("--bird-top"))
}

function handleJump(e) {
    if(e.code!=='Space') return 
    timeSinceLastJump=0    
}
function handleJumpTs(e) {
    timeSinceLastJump=0    
}

