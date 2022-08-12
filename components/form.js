const template = document.createElement("template");
template.innerHTML = `            
<link rel="stylesheet" href="/style.css" />
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
  <form
    action="https://app.us11.list-manage.com/subscribe/post?u=c875c0465297bcd41028642e9&amp;id=3644379a3d&amp;f_id=00f692e0f0"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate form"
    target="_blank"
    novalidate
  >
    <div id="mc_embed_signup_scroll" class="mc-form-wrapper">
      <div class="mc-field-group">
        <input
          type="email"
          value=""
          name="EMAIL"
          class="required email email-input"
          placeholder="Enter your email"
          id="mce-EMAIL"
        />
        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
      </div>

      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div
        style="position: absolute; left: -5000px"
        aria-hidden="true"
      >
        <input
          type="text"
          name="b_c875c0465297bcd41028642e9_3644379a3d"
          tabindex="-1"
          value=""
        />
      </div>
      <div class="optionalParent">
        <div class="clear foot">
          <input
            type="submit"
            value="Try for free"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button btn btn--cta btn--submit"
          />
        </div>
      </div>
    </div>

    <p class="warning">
      No strings attached. No credit card needed.
    </p>
  </form>
  <div id="mce-responses" class="clear foot">
    <div
      class="response"
      id="mce-error-response"
      style="display: none"
    ></div>
    <div
      class="response"
      id="mce-success-response"
      style="display: none"
    ></div>
  </div>
</div>

<style>
:host {
  width: 100%;
  display: flex;
  aliign-items: center;
  justify-content: center;
}

</style>
<script
  type="text/javascript"
  src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
></script>
<script type="text/javascript">
  (function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
    fnames[1] = "FNAME";
    ftypes[1] = "text";
    fnames[2] = "LNAME";
    ftypes[2] = "text";
    fnames[3] = "ADDRESS";
    ftypes[3] = "address";
    fnames[4] = "PHONE";
    ftypes[4] = "phone";
    fnames[5] = "BIRTHDAY";
    ftypes[5] = "birthday";
  })(jQuery);
  var $mcj = jQuery.noConflict(true);
</script>
<!--End mc_embed_signup-->`;

class Form extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define("form-component", Form);
