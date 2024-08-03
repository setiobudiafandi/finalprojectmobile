
describe('Open homescreen', () => {

    it('Access homescreen successfully', async() => {

        const name = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]')
        const weight = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]')
        const height = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]')
        const male_option = await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]')
        const next_btn = await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]')

        await name.click()
        await name.setValue('Test1')
        await weight.click()
        await weight.setValue(50)
        await height.click()
        await height.setValue(160)
        await browser.execute('mobile: hideKeyboard', { action: 'pressKey', key: 'Done' })
        await male_option.click()
        await next_btn.click()

        const opsi1 = await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_rest"]')
        const selesai_btn = await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]')

        await opsi1.click()
        await selesai_btn.click()

        const text_shown = await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_name"]').getText()
        await browser.pause(6000)

        await expect(text_shown).toContain("Hi")
    })
})