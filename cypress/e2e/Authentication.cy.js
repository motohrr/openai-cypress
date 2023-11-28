describe("Login as Client user", () => {
  it("should login successfully as a client user", () => {
    cy.visit("http://diversatest.com:82/");
    cy.contains("Identificarse").click();
    cy.get('input[name="email"]').type("testingclientemail@test.com");
    cy.get('input[name="password"]').type("password123");
    cy.contains("Iniciar sesión").click();
    cy.url().should("include", "dashboard");
  });
});

// Login as Owner user
describe("Login as Owner user", () => {
  it("should login successfully as an owner user", () => {
    cy.visit("http://diversatest.com:82/");
    cy.contains("Identificarse").click();
    cy.get('input[name="email"]').type("testingowneremail@test.com");
    cy.get('input[name="password"]').type("password123");
    cy.contains("Iniciar sesión").click();
    cy.url().should("include", "dashboard");
  });
});

// Login as Admin user
describe("Login as Admin user", () => {
  it("should login successfully as an admin user", () => {
    cy.visit("http://diversatest.com:82/");
    cy.contains("Identificarse").click();
    cy.get('input[name="email"]').type("testingadminemail@test.com");
    cy.get('input[name="password"]').type("password123");
    cy.contains("Iniciar sesión").click();
    cy.url().should("include", "dashboard");
  });
});