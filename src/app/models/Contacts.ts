export class  Contacts {
  id?: string;
  userId?: string;
    name: string;
    numbers: any;
   
    constructor(  id: string,
        userId: string,
        name: string,
        numbers: any) {
      this.id = id;
      this.userId = userId;
      this.name = name;
      this.numbers = numbers;
    }
  }