# Treacherous-Decorators

<img src="https://user-images.githubusercontent.com/927201/29661471-03b5ee16-88bc-11e7-880d-d8c027b264c8.png"/> 

[![Join the chat at https://gitter.im/grofit/treacherous](https://badges.gitter.im/grofit/treacherous.svg)](https://gitter.im/grofit/treacherous?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Adds the ability to use decorators to setup your model validation rules.

(See more about Treacherous [HERE](https://github.com/grofit/treacherous))

## Installing

Just do an:

```
npm install @treacherous/decorators
```

You will also need to make sure that you have some working polyfill for the stage 0 proposed metadata, you can use [`core-js`](https://github.com/zloirock/core-js) which has this or [`reflect-metadata`](https://github.com/rbuckton/reflect-metadata) library.

## Using them

The decorators are easy enough to use, just sprinkle them on any applicable properties within your models like so:

```ts
import {createGroup} from "@treacherous/core";
import {required, email, matches, createRulesetFor, createGroupFor} from "@treacherous/decorators";

// Create a model and put your decorators on
class SomeModel
{
    @required()
    @email()
    public emailAddress = "";

    @required()
    @email()
    @matches("emailAddress")
    public confirmEmailAddress = "";
}

// Create an instance
const modelInstance = new SomeModel();

// Create a ruleset from the type or instance and make a group with it
const ruleset = createRulesetFor(modelInstance);
const validationGroup = createGroup().build(modelInstance, ruleset);

// You can even shorten the previous step to this
const validationGroup = createGroupFor(modelInstance);
```

## Available Decorators

There are 2 main parts to this module, the first bit being the decorators which allow you to hint to validation intent, so here is a list of the available decorators.

### `@withRule`

This allows you to indicate that the propery should have the rule applied to it.

You have to pass in the name of the rule you want to apply, then pass in any options required for your rule.

```ts
class WithRuleExample
{
    @withRule("required")
    @withRule("minLength", 10)
    public someString = "";
}
```

You can also provide other optional fields, like if you want to make the rule only apply with certain conditions or if you want to override the message.

```ts
class CommunicationModel
{
    public emailIsPrimaryContact: boolean;

    @withRule("email")
    @withRule("required",                                       // rule name
        null,                                                   // rule options
        (x) => x.resolve("emailIsPrimarycontact"),              // applies if
        "Email address is required if it is primary contact")   // message override
    public emailAddress: string;
}

// The arguments for the 3rd parameter (appliesIf) are
appliesIf?: (modelResolver: IModelResolver, value: any, ruleOptions?: any) => boolean | boolean

// The signature for the 4th parameter (messageOverride) are
messageOverride?: (value: any, ruleOptions?: any) => string | string)
```

#### Shortcuts

There are now also shortcut decorators for all rules which can be used, i.e rather than `@withRule("required")` you can do `@required()`, all built in rules are exposed this way for consumption. They all wrap the `withRule` decorator so you can pass through message overrides etc.

### `@withRuleset`

This allows you to indicate that the property is a complex object and should be validated using an existing ruleset. 

The ruleset can be from an actual instance of a ruleset (i.e import it from another file/module) or a type of object which contains decorators defining its validation.

```ts
class RulesetExample
{       
    @withRuleset(WithRuleExample)
    public basic: WithRuleExample;
}
```

### `@withRuleForEach`

This is very much like the normal `withRule` but implies that this rule should apply to an array object so it should apply the rule to each element. You also have access to the `appliesIf` and `messageOverride` parameters if you want them.

```ts
class RuleForEachExample
{       
    @withRuleForEach("required")
    @withRuleForEach("minLength", 2)
    public basic: Array<string>;
}
```

### `@withRulesetForEach`

This is same as the `withRuleset` decorator but applies the ruleset to each element within the array.

```ts
class RuleForEachExample
{       
    @withRulesetForEach(WithRuleExample)
    public basic: Array<WithRuleExample>;
}
```

### `@withDisplayName`

This allows you to provide a hint that the property name if displayed (usually by treacherous view framework plugins) should be displayed as the alias provided.

```ts
class RuleForEachExample
{       
    @withDisplayName("Accepted T&Cs")
    public hasAcceptedTermsAndConditions: boolean;
}
```

## Exposed Methods

This library contains some helper methods which wrap up some underlying treacherous calls and make use of the decorators, here is a list of them:

### `createRulesetFor`

This method will let you generate a ruleset from the decorators on a model. This can take either the model type or an instance of the model, either will return an `IRuleset`.

```
class SomeModel { /* contains decorators etc */}

// From a type
const ruleset = createRulesetFor(SomeModel);

// From an instance
const model = new SomeModel();
const ruleset = createRulesetFor(model);
```

### `createGroupFor`

This method wraps up the creation of a validation group for a model instance. It also allows you to provide an optional setup parameter if you want to indicate how the group should be created.

```
class SomeModel { /* contains decorators etc */}

const model = new SomeModel();

// Create a default group
const validationGroup = createGroupFor(model);

// Create a default group with custom setup
const validationGroup = createGroupFor(model, group => group.asReactiveGroup().andValidateOnStart());
```

## Credits

"Mountains" Icon courtesy of [The Noun Project](https://thenounproject.com/), by Aleksandr Vector, under [CC 3.0](http://creativecommons.org/licenses/by/3.0/us/)
