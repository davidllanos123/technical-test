import { faker } from '@faker-js/faker';

class RandomBooking {
    firstname?: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: object;
    additionalneeds: string;

    constructor() {
        this.firstname = this.randomFirstName();
        this.lastname = this.randomLastName();
        this.totalprice = this.randomTotalPrice();
        this.depositpaid = this.randomDepositPaid();
        this.bookingdates = this.randomDates();
        this.additionalneeds = this.randomText();
    }

    private randomFirstName(): string{
        return  faker.person.firstName();
    }

    private randomLastName(): string{
        return  faker.person.lastName();
    }

    private randomTotalPrice(): number {
        return faker.number.int( {min: 50, max: 300})
    }

    private randomDepositPaid(): boolean {
        return faker.datatype.boolean()
    }

    private randomDates(): object {
        const start = new Date(2000, 0, 1); // January 1, 2000
        const end = new Date(2024, 11, 31); // December 31, 2024

        const date1 = this.getRandomDate(start, end);
        const date2 = this.getRandomDate(start, end);


        if (date1 < date2) {
            return { checkin: date1.toISOString().split('T')[0], checkout: date2.toISOString().split('T')[0] };
        } else {
            return { checkin: date2.toISOString().split('T')[0], checkout: date1.toISOString().split('T')[0] };
        }
    }

    private getRandomDate(start: Date, end: Date): Date {
        const startDate = start.getTime();
        const endDate = end.getTime();
        const randomDate = new Date(startDate + Math.random() * (endDate - startDate));

        // Return a date with only year, month, and day
        return new Date(randomDate.getFullYear(), randomDate.getMonth(), randomDate.getDate());
    }

    private randomText(): string {
        return faker.string.alphanumeric({length:{min:4,max:10}});
    }
}

export default RandomBooking;