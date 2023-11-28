describe("Login as Client user", () => {
  it("should login successfully", () => {
    cy.visit("http://diversatest.com:82/");

    cy.contains("Identificarse").click();

    cy.get('input[name="email"]').type("testingclientemail@test.com");
    cy.get('input[name="password"]').type("password123");

    cy.contains("Iniciar sesión").click();

    cy.url().should("include", "dashboard");
  });
});