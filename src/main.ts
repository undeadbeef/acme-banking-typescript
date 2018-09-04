class ACMEBanking {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  greet() {
    return 'Hello, ' + this.username ? this.username : 'unknown subject';
  }
}

let greeter = new ACMEBanking('Random User');
console.log(greeter.greet());