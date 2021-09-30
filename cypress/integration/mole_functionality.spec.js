/// <reference types="cypress" />

import * as GamePage from '../pages/gamePage.js'

describe("Check if the mole movements are working as required", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Check if the initial mole location is correct", () => {
    GamePage.is_mole_location_correct(0, 0);
  });

  it("Check if the location of the mole gets changed on clicking it", () => {
    // Verifying just twice if the mole location is changed
    GamePage.is_mole_loc_on_click_changed();
    GamePage.is_mole_loc_on_click_changed();
  });

  it("Check if the mole location gets reset after 10 seconds", () => {
    GamePage.is_mole_loc_reset(10);
  });
});
