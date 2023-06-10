/// <reference types='../cypress' />

describe("Actions ", () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit("/");
  });

  //Test case 1:

  it("Login (focus+ blur + clear+ contains + type+ click) ", () => {
    cy.visit("/login");
    cy.wait(500);
    cy.contains("LOGIN").focus().blur();
    cy.get(".email").focus().type("abdulwahab@gmail.com", { delay: 200 });
    cy.get(".email").clear();
    cy.get(".email").focus().type("abdulwahab@gmail.com", { delay: 100 });
    cy.wait(500);
    cy.get(".pass").focus().type("abcdef", { delay: 100 });
    cy.wait(500);
    cy.contains("LOGIN").focus().click();
  });

  //test case: 2: Sign up

  it("Sign up (find)", () => {
    cy.visit("/signup");
    cy.get(".form").find('[type="text"]').type("Abdul Wahab", { delay: 100 });
    cy.wait(100);
    cy.get(".emailTxt").type("abdulwahab@gmail.com");
    cy.wait(100);
    cy.get(".passwordTxt").type("Data Structure");
    cy.wait(100);
    cy.get(".form").find('[type="submit"]').click();
  });

  //   Test case 3: navigate to contact us page

  it("Go to contact us page...", () => {
    cy.contains("Contact").click();
    cy.wait(100);
  });

  // Test case 4: fill in contact us form

  it("Fill contact form...", () => {
    cy.contains("Contact").click();
    cy.wait(100);
    cy.get("#name").type("Abdul Wahab");
    cy.wait(100);
    cy.get("#email").type("abdulwahab@gmail.com");
    cy.wait(100);
    cy.get("#subject").type("Software Testing");
    cy.wait(100);
    cy.get("#msg").type("Very important and impressive subject...");
    cy.wait(100);
    cy.get("#sendBtn").click();
  });
});
