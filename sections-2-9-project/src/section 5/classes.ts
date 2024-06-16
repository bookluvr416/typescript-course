abstract class Department {
  private employees: string[] = [];
  static fiscalYear: number = 2020;

  constructor(private readonly id: string, protected name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  abstract calcIncome(costs: number, income: number): number;
  
}

// IT Department Class

class ITDepartment extends Department {
  private leader: string;

  get leaderName() {
    if (this.leader) return this.leader;
    return 'No Leader';
  }

  set leaderName(name: string) {
    this.leader = name;
  }

  constructor(id: string, public admins: string[]) {
    super(id, 'IT Department');
    this.leader = admins[0];
  }

  printAdmins() {
    console.log(this.admins);
  }

  describe() {
    console.log(`overrided describe method for department: ${this.name}`);
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
    this.leader = admin;
  }

  calcIncome(costs: number, income: number) {
    return income - costs;
  }
}

// singleton accounting department

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  private constructor(id: string) {
    super(id, 'Accounting');
  }


  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new AccountingDepartment('d3');
    return this.instance;
  }

  calcIncome(costs: number, income: number) {
    return income - costs;
  }
}



// department - no longer instanciable once turned into an abstract class

// const cosmetics = new Department('d1', 'Cosmetics');

// console.log(cosmetics);
// cosmetics.describe();
// cosmetics.addEmployee('amanda');
// cosmetics.printEmployeeInformation();

// const employee1 = Department.createEmployee('amanda');
// console.log(employee1, Department.fiscalYear);

// it department

const it = new ITDepartment('d2', ['amanda']);
it.addEmployee('amanda');
console.log(it);
it.printAdmins();
it.describe();
it.addAdmin('sally');
console.log(it.leaderName);
it.leaderName = 'bob';
console.log(it.leaderName);
console.log(it.calcIncome(100,1000));

// accounting department

const accounting = AccountingDepartment.getInstance();
