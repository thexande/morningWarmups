var count = localStorage.getItem('counter')
if(count == null) {
    count = 0
} count++
localStorage.setItem('counter', count)

console.log(count)
document.getElementById('display').innerHTML = count