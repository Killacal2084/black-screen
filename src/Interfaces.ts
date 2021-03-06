import * as e from './Enums';
import * as fs from 'fs';
import Prompt from "./Prompt";

export interface Dimensions {
    columns: number;
    rows: number;
}

export interface Attributes {
    color?: e.Color;
    'background-color'?: e.Color;
    weight?: e.Weight;
    underline?: boolean;
    crossedOut?: boolean;
    blinking?: boolean;
}

export interface Size {
    height: number;
    width: number;
}

export interface Advancement {
    vertical?: number;
    horizontal?: number;
}

export interface Position {
    column: number;
    row: number;
}

export interface AutocompletionProvider {
    getSuggestions(prompt: Prompt): Promise<Suggestion[]>;
}

export interface Suggestion {
    value: string;
    score: number;
    synopsis: string;
    description: string;
    type: string;
    partial?: boolean;
    prefix?: string;
}

export interface Parsable {
    getLexemes: () => string[];
    getLastLexeme: () => string;
    getText: () => string;
    parse: () => void;
    onParsingError: Function;
}

export interface VcsData {
    isRepository: boolean;
    branch?: string;
    status?: string;
}

export interface FileInfo {
    name: string;
    stat: fs.Stats;
}
