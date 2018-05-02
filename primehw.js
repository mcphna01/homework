"use strict"

function isPrime(n) {
    let i=2;
    while(i<=Math.sqrt(n)) {
        if (n%i===0) {
            return false
        }
        i++
    }
    return true
}

function firstN(n) {
    let res=[]
    let i=2
    while(res.length<n) {
        if (isPrime(i)) {
            res.push(i)
        }
        i++
    }
    return res
}

function nextprime() {
	let i=0
    let plist=firstN(10000)
    let nprime=document.querySelector("#nextprime")
    while(nprime.innerHTML>=plist[i]) {
    	i++
    }
    nprime.innerHTML=plist[i]  
}