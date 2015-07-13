# honeypot-form
This is a simple form with honeypot for spam protection. 

The idea is to set up one input with a seeded value that shouln't change. If the value does change, the user is most likely a bot and you can deal with it as you wish.

    <div class="form-group honeypot" aria-hidden="true">
        <label for="poID">User ID</label>
        <input type="text" id="poID" value="Do not change" required> 
    </div>

The container is hidden from the screen using on off-screen technique, and it additionally hidden from screen readers with the use of `aria-hidden="true"`. We aren't using a simple `display: none` in case a bot is looking for that and simply ignoring hidden fields.

By setting a value and making the field required, bots should attempt to fill it out. With a little JavaScript, change the input value if the field ever gains focus. On submission, if the input does not contain the known, pre-set value, assume it is spam and dumb the submission.
