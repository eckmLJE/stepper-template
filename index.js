// Global Variables

var currentStep = 1;

// Selectors

var headerSteps = $(".header-step");
var bodySteps = $(".body-step");

var backButton = $("#step-back-button");
var continueButton = $("#step-continue-button");

// Event Handlers

headerSteps.click(handleStepClick);
backButton.click(handleBackClick);
continueButton.click(handleContinueClick);

function handleStepClick() {
  var step = $(this).data().step;
  setCurrentStep(step);
  headerSteps.each(applyCurrentStep);
  bodySteps.each(applyCurrentStep);
}

function handleContinueClick() {
  step = currentStep + 1;
  setCurrentStep(step);
  headerSteps.each(applyCurrentStep);
  bodySteps.each(applyCurrentStep);
}

function handleBackClick() {
  step = currentStep - 1;
  setCurrentStep(step);
  headerSteps.each(applyCurrentStep);
  bodySteps.each(applyCurrentStep);
}

function manageButtonsDisplay() {
  currentStep > 1
    ? backButton.addClass("show-button")
    : backButton.removeClass("show-button");
  currentStep < 5
    ? continueButton.addClass("show-button")
    : continueButton.removeClass("show-button");
}

// Navigation

function setCurrentStep(step) {
  currentStep = step;
  console.log(currentStep);
}

function applyCurrentStep() {
  $(this).data().step === currentStep
    ? $(this).addClass("current-step")
    : $(this).removeClass("current-step");
  manageButtonsDisplay();
}

// Validation

