class ACMEBanking {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  public greet() {
    return "Hello, " + this.username ? this.username : "unknown subject";
  }
}
