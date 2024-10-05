const countdown= document.getElementById(`countdown`);

function delay(sec) {
    return new Promise(resolve => setTimeout(resolve, sec));
}

async function displayCountdown(count) {
    try {
        while (count > 0) {
            countdown.innerHTML = count;
            await delay(1000); 
            count--;
        }
        countdown.innerHTML = "Happy Independence Day";
    } catch (error) {
        console.error(" error :", error);
        countdown.innerHTML = "An error occurred";
    }
}

displayCountdown(10);



