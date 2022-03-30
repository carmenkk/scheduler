describe("appointments", () => {

  beforeEach(() => {
    //reset the api
    cy.request("GET", "/api/debug/reset");

    cy.visit("/");
    cy.contains("Monday");
  })

  xit("should book an interview", () => {
    cy.get("[alt=Add]")
      .first()
      .click()

    // input student name and chose interviewer
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
    cy.get("[alt='Sylvia Palmer']").click();

    //save the appointment
    cy.contains("Save").click();

    //show appointment card
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  xit("should edit an interview" , () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true})
    
    // input student name and chose interviewer
    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']").click();

    //save the appointment
    cy.contains("Save").click();

    //show appointment card
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");

  })

  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .first()
      .click({ force: true})

    cy.contains("Confirm").click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
    
    

  })
 

})