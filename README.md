A very crude test to demonstrate [Cypress issue 1022](https://github.com/cypress-io/cypress-docker-images/issues/1022)

Initial run:
* `docker run -it -v .:/test cypress/browsers:node-20.11.0-chrome-121.0.6167.184-1-ff-123.0-edge-121.0.2277.128-1 /test/test.sh -i`

Subsequent runs:
* `docker run -it -v .:/test cypress/browsers:node-20.11.0-chrome-121.0.6167.184-1-ff-123.0-edge-121.0.2277.128-1 /test/test.sh`

The spec is just a crude loop that logs a message every second, it doesn't really **do** anything. After a minute or so,
and this may vary depending on hardware, you will see output similar to this:

```shell
Running Cypress
┌─────────┬────────────────┐
│ version │ last used      │
├─────────┼────────────────┤
│ 13.6.6  │ 26 minutes ago │
└─────────┴────────────────┘

DevTools listening on ws://127.0.0.1:36599/devtools/browser/9ccceeed-4e59-4ef0-b1be-268614f377bd

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        13.6.6                                                                         │
  │ Browser:        Chrome 121 (headless)                                                          │
  │ Node Version:   v20.11.0 (/usr/local/bin/node)                                                 │
  │ Specs:          1 found (loop.cy.js)                                                           │
  │ Searched:       cypress/e2e/loop.cy.js                                                         │
  │ Experiments:    experimentalRunAllSpecs=true,experimentalMemoryManagement=true                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  loop.cy.js                                                                      (1 of 1)


  Run for 3 minutes 
Will run until 180 loops have happened
Loop: 1
...
Loop: 99
Warning: vkCreateInstance: Found no drivers!
Warning: vkCreateInstance failed with VK_ERROR_INCOMPATIBLE_DRIVER
    at CheckVkSuccessImpl (../../third_party/dawn/src/dawn/native/vulkan/VulkanError.cpp:88)
    at CreateVkInstance (../../third_party/dawn/src/dawn/native/vulkan/BackendVk.cpp:458)
    at Initialize (../../third_party/dawn/src/dawn/native/vulkan/BackendVk.cpp:344)
    at Create (../../third_party/dawn/src/dawn/native/vulkan/BackendVk.cpp:266)
    at operator() (../../third_party/dawn/src/dawn/native/vulkan/BackendVk.cpp:521)

Loop: 100
...
```
