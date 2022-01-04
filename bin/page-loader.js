#!/usr/bin/env node
import { Command } from 'commander';
import fs from 'fs';
import getCurrentPath from '../src/currentPath.js';
import { pageLoading } from '../src/utils.js';

const program = new Command();
program
  .version('0.0.1', '-v, --version', 'output the version number')
  .option('-o, --output [dir]', 'output dir (default: "/home/user/current-dir")', process.cwd())
  .arguments('<url>')
  .action(async (url) => {
    const { output } = program.opts();

    if (url) {
      const currentPath = getCurrentPath(url);
      const page = await pageLoading(url);
      await fs.writeFile(`${output}/files/${currentPath}`, page, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });

program.parse(process.argv);
