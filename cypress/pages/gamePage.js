export function is_mole_location_correct(left, top) {
  cy.get('div[class^="box"]').should(($box) => {
    expect($box).to.have.css("left", left+"px");
    expect($box).to.have.css("top", top+"px");
  });
};

export function is_mole_loc_on_click_changed() {
  cy.get('div[class^="box"]').invoke("attr", "style").then(val => {
    const initialValue = val;
    click_mole();
    cy.get('div[class^="box"]').invoke("attr", "style").should("not.equal", initialValue);
  });
};

export function is_mole_loc_reset(time) {
  const firstWait = (time - 1)*1000;
  click_mole();
  cy.get('div[class^="box"]').invoke("attr", "style").then(val => {
    const currentValue = val;
    cy.wait(firstWait);
    cy.get('div[class^="box"]').invoke("attr", "style").should("equal", currentValue);
    cy.wait(time*1000 - firstWait);
    cy.get('div[class^="box"]').invoke("attr", "style").should("not.equal", currentValue);
  });
};

function click_mole() {
  cy.get('div[class^="box"]').click();
};
