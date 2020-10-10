// LISCOV substitution principle

class Person {
    
}

class Member extends Person {
    access() {
        console.log('you access')
    }
}

class Guest extends Person {
    isGuest = true;
}

class Frontend extends Member {
    canCreateFrontend () {

    }
}

class Backand extends Member {
    canCreateBackend () {

    }
}

class PersonFromDefferentCompany extends Guest {
    access () {
        throw new Error ('access denied');
    }
}

function openSecretDoor (member) {
    member.access()
}

openSecretDoor(new Backand());
openSecretDoor(new Frontend());
// openSecretDoor(new PersonFromDefferentCompany());

//Общее между всеми классами что они являются компонентами
class Component {
    
}
// некоторые компоненты могул быть модифицированн но они все равно являются компонентами (абстракция)
class ComponentWrapp extends Component  {
    
}
// компоненты по умолчанию это тоже все еще обычные компоненты это их абстракция
class ComponentDeffoult extends Component {
    render () {
        return `<div>Component</div>`;
    }
}

//компонент по умолчанию его можно сразу отобразить (render)
class Header extends ComponentDeffoult {
    onInit(){}
}
////компонент по умолчанию его можно сразу отобразить (render)
class Footer extends ComponentDeffoult {
    afterInit(){}
}

// компонент который должен быть модифицирован и не может быть сразу же отображен
class HOC extends ComponentWrapp {
    render () {
        throw new Error ('render is imposible here');
    }
    wrapComponent (component) {
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new Header);
renderComponent(new Footer);