currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/projects/project1/tsconfig.json]
{"compilerOptions":{"module":"none","composite":true},"exclude":["temp"]}

//// [/user/username/projects/myproject/projects/project1/class1.ts]
class class1 {}

//// [/user/username/projects/myproject/projects/project1/class1.d.ts]
declare class class1 {}

//// [/user/username/projects/myproject/projects/project2/tsconfig.json]
{"compilerOptions":{"module":"none","composite":true},"references":[{"path":"../project1"}]}

//// [/user/username/projects/myproject/projects/project2/class2.ts]
class class2 {}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js --w -p /user/username/projects/myproject/projects/project2/tsconfig.json --extendedDiagnostics
Output::
[[90m12:00:33 AM[0m] Starting compilation in watch mode...

Current directory: / CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
Loading config file: /user/username/projects/myproject/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/tsconfig.json 2000 undefined Config file of referened project
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class1.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/class2.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
[[90m12:00:40 AM[0m] Found 0 errors. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2 1 undefined Wild card directory


Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (computed .d.ts during emit)

PolledWatches::
/user/username/projects/myproject/projects/project2/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/projects/project2/tsconfig.json: *new*
  {}
/user/username/projects/myproject/projects/project1/tsconfig.json: *new*
  {}
/user/username/projects/myproject/projects/project1/class1.d.ts: *new*
  {}
/user/username/projects/myproject/projects/project2/class2.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1: *new*
  {}
/user/username/projects/myproject/projects/project2: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js]
var class2 = /** @class */ (function () {
    function class2() {
    }
    return class2;
}());


//// [/user/username/projects/myproject/projects/project2/class2.d.ts]
declare class class2 {
}


//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","signature":"-2684084705-declare class class2 {\n}\n","affectsGlobalScope":true}],"root":[3],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./class2.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.d.ts",
      "./class2.ts"
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../project1/class1.d.ts": {
        "original": {
          "version": "-3469237238-declare class class1 {}",
          "affectsGlobalScope": true
        },
        "version": "-3469237238-declare class class1 {}",
        "signature": "-3469237238-declare class class1 {}",
        "affectsGlobalScope": true
      },
      "./class2.ts": {
        "original": {
          "version": "777969115-class class2 {}",
          "signature": "-2684084705-declare class class2 {\n}\n",
          "affectsGlobalScope": true
        },
        "version": "777969115-class class2 {}",
        "signature": "-2684084705-declare class class2 {\n}\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        3,
        "./class2.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 0
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.d.ts",
      "./class2.ts"
    ],
    "latestChangedDtsFile": "./class2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 864
}


Change:: Add class3 to project1

Input::
//// [/user/username/projects/myproject/projects/project1/class3.ts]
class class3 {}


Before running Timeout callback:: count: 1
1: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Scheduling update
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Synchronizing program
Loading config file: /user/username/projects/myproject/projects/project1/tsconfig.json
[[90m12:00:45 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
[91merror[0m[90m TS6053: [0mFile '/user/username/projects/myproject/projects/project1/class3.d.ts' not found.
  The file is in the program because:
    Output from referenced project '/user/username/projects/myproject/projects/project1/tsconfig.json' included because '--module' is specified as 'none'

  [96muser/username/projects/myproject/projects/project2/tsconfig.json[0m:[93m1[0m:[93m69[0m
    [7m1[0m {"compilerOptions":{"module":"none","composite":true},"references":[{"path":"../project1"}]}
    [7m [0m [96m                                                                    ~~~~~~~~~~~~~~~~~~~~~~[0m
    File is output from referenced project specified here.

[[90m12:00:46 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/project1/class3.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {}
/user/username/projects/myproject/projects/project2/class2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {}
/user/username/projects/myproject/projects/project2:
  {}

exitCode:: ExitStatus.undefined


Change:: Add class3 output to project1

Input::
//// [/user/username/projects/myproject/projects/project1/class3.d.ts]
declare class class3 {}


PolledWatches::
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {}
/user/username/projects/myproject/projects/project2/class2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {}
/user/username/projects/myproject/projects/project2:
  {}

Before running Timeout callback:: count: 1
2: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected output file: /user/username/projects/myproject/projects/project1/class3.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Synchronizing program
[[90m12:00:49 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
[[90m12:00:56 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/projects/project1/class3.d.ts (used version)
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {}
/user/username/projects/myproject/projects/project2/class2.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/projects/project1/class3.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {}
/user/username/projects/myproject/projects/project2:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js] file written with same contents
//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","../project1/class3.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"-3469165364-declare class class3 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","signature":"-2684084705-declare class class2 {\n}\n","affectsGlobalScope":true}],"root":[4],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./class2.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.d.ts",
      "../project1/class3.d.ts",
      "./class2.ts"
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../project1/class1.d.ts": {
        "original": {
          "version": "-3469237238-declare class class1 {}",
          "affectsGlobalScope": true
        },
        "version": "-3469237238-declare class class1 {}",
        "signature": "-3469237238-declare class class1 {}",
        "affectsGlobalScope": true
      },
      "../project1/class3.d.ts": {
        "original": {
          "version": "-3469165364-declare class class3 {}",
          "affectsGlobalScope": true
        },
        "version": "-3469165364-declare class class3 {}",
        "signature": "-3469165364-declare class class3 {}",
        "affectsGlobalScope": true
      },
      "./class2.ts": {
        "original": {
          "version": "777969115-class class2 {}",
          "signature": "-2684084705-declare class class2 {\n}\n",
          "affectsGlobalScope": true
        },
        "version": "777969115-class class2 {}",
        "signature": "-2684084705-declare class class2 {\n}\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        4,
        "./class2.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 0
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.d.ts",
      "../project1/class3.d.ts",
      "./class2.ts"
    ],
    "latestChangedDtsFile": "./class2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 968
}


Change:: Add excluded file to project1

Input::
//// [/user/username/projects/myproject/projects/project1/temp/file.d.ts]
declare class file {}


Timeout callback:: count: 0
Immedidate callback:: count: 0
Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected excluded file: /user/username/projects/myproject/projects/project1/temp
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp/file.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected excluded file: /user/username/projects/myproject/projects/project1/temp/file.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp/file.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project


exitCode:: ExitStatus.undefined


Change:: Delete output of class3

Input::
//// [/user/username/projects/myproject/projects/project1/class3.d.ts] deleted

Before running Timeout callback:: count: 1
3: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 2:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 2:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected output file: /user/username/projects/myproject/projects/project1/class3.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Synchronizing program
[[90m12:01:05 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
[91merror[0m[90m TS6053: [0mFile '/user/username/projects/myproject/projects/project1/class3.d.ts' not found.
  The file is in the program because:
    Output from referenced project '/user/username/projects/myproject/projects/project1/tsconfig.json' included because '--module' is specified as 'none'

  [96muser/username/projects/myproject/projects/project2/tsconfig.json[0m:[93m1[0m:[93m69[0m
    [7m1[0m {"compilerOptions":{"module":"none","composite":true},"references":[{"path":"../project1"}]}
    [7m [0m [96m                                                                    ~~~~~~~~~~~~~~~~~~~~~~[0m
    File is output from referenced project specified here.

[[90m12:01:12 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/project1/class3.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {}
/user/username/projects/myproject/projects/project2/class2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {}
/user/username/projects/myproject/projects/project2:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js] file written with same contents
//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","signature":"-2684084705-declare class class2 {\n}\n","affectsGlobalScope":true}],"root":[3],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1],"latestChangedDtsFile":"./class2.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.d.ts",
      "./class2.ts"
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../project1/class1.d.ts": {
        "original": {
          "version": "-3469237238-declare class class1 {}",
          "affectsGlobalScope": true
        },
        "version": "-3469237238-declare class class1 {}",
        "signature": "-3469237238-declare class class1 {}",
        "affectsGlobalScope": true
      },
      "./class2.ts": {
        "original": {
          "version": "777969115-class class2 {}",
          "signature": "-2684084705-declare class class2 {\n}\n",
          "affectsGlobalScope": true
        },
        "version": "777969115-class class2 {}",
        "signature": "-2684084705-declare class class2 {\n}\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        3,
        "./class2.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 0
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts"
    ],
    "latestChangedDtsFile": "./class2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 860
}


Change:: Add output of class3

Input::
//// [/user/username/projects/myproject/projects/project1/class3.d.ts]
declare class class3 {}


PolledWatches::
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {}
/user/username/projects/myproject/projects/project2/class2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {}
/user/username/projects/myproject/projects/project2:
  {}

Before running Timeout callback:: count: 1
4: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected output file: /user/username/projects/myproject/projects/project1/class3.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Synchronizing program
[[90m12:01:19 AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
[[90m12:01:26 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/projects/project1/class3.d.ts (used version)
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (computed .d.ts)

PolledWatches::
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {}
/user/username/projects/myproject/projects/project2/class2.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/projects/project1/class3.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {}
/user/username/projects/myproject/projects/project2:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js] file written with same contents
//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","../project1/class3.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"-3469165364-declare class class3 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","signature":"-2684084705-declare class class2 {\n}\n","affectsGlobalScope":true}],"root":[4],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./class2.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.d.ts",
      "../project1/class3.d.ts",
      "./class2.ts"
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../project1/class1.d.ts": {
        "original": {
          "version": "-3469237238-declare class class1 {}",
          "affectsGlobalScope": true
        },
        "version": "-3469237238-declare class class1 {}",
        "signature": "-3469237238-declare class class1 {}",
        "affectsGlobalScope": true
      },
      "../project1/class3.d.ts": {
        "original": {
          "version": "-3469165364-declare class class3 {}",
          "affectsGlobalScope": true
        },
        "version": "-3469165364-declare class class3 {}",
        "signature": "-3469165364-declare class class3 {}",
        "affectsGlobalScope": true
      },
      "./class2.ts": {
        "original": {
          "version": "777969115-class class2 {}",
          "signature": "-2684084705-declare class class2 {\n}\n",
          "affectsGlobalScope": true
        },
        "version": "777969115-class class2 {}",
        "signature": "-2684084705-declare class class2 {\n}\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        4,
        "./class2.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 0
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "../project1/class1.d.ts",
      "../project1/class3.d.ts",
      "./class2.ts"
    ],
    "latestChangedDtsFile": "./class2.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 968
}

