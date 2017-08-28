'use strict';

var WIZARD_NAMES_FIRST = ['Иван', 'Хуан Себастьян', 'Мария', 'Критоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_NAMES_SECOND = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_NAMES_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_NAMES_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [];

function wizardsCreate(count) {
  for (var i = 0; i < count; i++) {
    wizards.push({
      name: WIZARD_NAMES_FIRST[createRandom(WIZARD_NAMES_FIRST.length)] + ' ' + WIZARD_NAMES_SECOND[createRandom(WIZARD_NAMES_SECOND.length)],
      coatColor: WIZARD_NAMES_COAT_COLOR[createRandom(WIZARD_NAMES_COAT_COLOR.length)],
      eyesColor: WIZARD_NAMES_EYES_COLOR[createRandom(WIZARD_NAMES_EYES_COLOR.length)]
    });
  }
}

wizardsCreate(4);

function createRandom(max) {
  return parseInt(Math.random() * (max - 1));
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
