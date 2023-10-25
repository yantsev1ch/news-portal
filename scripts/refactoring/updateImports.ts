import { Project } from 'ts-morph';
import { PROJECT_LAYERS } from './consts';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
  return PROJECT_LAYERS.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
