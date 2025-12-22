import {spawn} from 'node:child_process';
import {SubProcess} from './subprocess';
import {exec} from './exec';

export {spawn, SubProcess, exec};
export type {
  TeenProcess,
  TeenProcessExecOptions,
  TeenProcessExecResult,
  ExecError,
  SubProcessOptions
} from './types';
export default {
  spawn,
  SubProcess,
  exec
};
