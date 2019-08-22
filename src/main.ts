import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function run() {
  try {
    await exec.exec("git clone https://github.com/emscripten-core/emsdk.git");
    await exec.exec("cd emsdk");
    await exec.exec("./emsdk install latest");
    await exec.exec("./emsdk activate latest");
    await exec.exec("source ./emsdk_env.sh");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();