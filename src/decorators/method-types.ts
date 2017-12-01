import {IModelResolver} from "treacherous";
export type AppliesIfFunction = (modelResolver: IModelResolver, value: any, ruleOptions?: any) => boolean;
export type MessageOverrideFunction = (value: any, ruleOptions?: any) => string;