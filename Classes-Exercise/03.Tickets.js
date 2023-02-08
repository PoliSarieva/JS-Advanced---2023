function solve (ticketArr, sortParameter) {
    let ticketNewArr = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (const elem of ticketArr) {
        let ticketInfo = elem.split('|');
        let destination = ticketInfo[0];
        let price = Number(ticketInfo[1]);
        let status = ticketInfo[2];
        let tickets = new Ticket(destination, price, status);
        
        ticketNewArr.push(tickets);
    }

    if(sortParameter === 'destination') {
       
        ticketNewArr.sort((a,b)=>(a.destination).localeCompare(b.destination));
    } else if (sortParameter === 'price') {
        ticketNewArr.sort((a,b)=>(a.price - b.price));
    } else if (sortParameter === 'status') {
        ticketNewArr.sort((a,b)=>(a.status).localeCompare(b.status));
    }
    return ticketNewArr;
    /*for (const elem of ticketNewArr) {
        console.log(elem);
    }*/

}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');

/*[ Ticket { destination: 'Boston',
price: 126.20,
status: 'departed' }, 
Ticket { destination: 'New York City',
price: 95.99,
status: 'available' }, */
