import { generateFiles, joinPathFragments, readProjectConfiguration, Tree } from '@nrwl/devkit';
import { LibGeneratorProps } from './LibGeneratorProps';
import * as path from 'path';
import * as fs from 'fs';
import { Graph } from './Graph';
import { libraryGenerator } from '@nrwl/angular/generators';

export default async function (tree: Tree, schema: LibGeneratorProps) {
  const graphPath = path.join(__dirname, schema.graphPath);
  const graph: Graph = JSON.parse(fs.readFileSync(graphPath).toString());

  for (const graphItem of graph.libraries) {
    await libraryGenerator(tree, { name: graphItem.name, directory: graphItem.directory });

    const libraryRoot = readProjectConfiguration(tree, graphItem.name).root;

    console.log(libraryRoot);

    // generateFiles(tree, joinPathFragments(__dirname, './files'), libraryRoot, { imports: graphItem.imports });
  }

  return () => {
  };
}
