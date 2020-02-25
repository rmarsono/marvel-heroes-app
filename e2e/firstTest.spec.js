/* eslint-disable no-undef */
describe("Marvel Heroes App", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should load the Heroes list screen", async () => {
    await expect(element(by.id("heroesListTopNavigation"))).toBeVisible()
  })

  it("should filter the list correctly", async () => {
    await element(by.id("filterTextInput")).tap()
    await element(by.id("filterTextInput")).clearText()
    await element(by.id("filterTextInput")).typeText("man")
    await expect(element(by.label("3-D Man"))).toBeVisible()
  })

  it("should show the Hero details screen after selecting the first hero: 3-D Man", async () => {
    await waitFor(element(by.label("3-D Man"))).toBeVisible().withTimeout(5000)
    await element(by.label("3-D Man")).tap()
    await waitFor(element(by.id("heroDetailsTopNavigation"))).toBeVisible()
  })

  it("should show hero header and description", async () => {
    await waitFor(element(by.id("heroHeader"))).toBeVisible()
    await waitFor(element(by.id("heroDescription"))).toBeVisible()
  })
})
