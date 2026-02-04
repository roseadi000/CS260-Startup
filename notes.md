# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 34.203.11.120
.click seems to be the cheapest TLD, only $3 per year. I feel like the hardest part of renting a domain name was coming up with the domain name! Remember to add your DNS records so your domain name connects to your server. That's in the hosted domains section of Route 53.

## Caddy

Don't forget to edit the top line (where the :80 was). Otherwise, pretty easy.

## HTML

Don't forget to use the right element for links (href) and images (src). Also, the element goes in the tag (```<a href="link">Link</a>```). The input elements seem very useful, but there's no way I'll remember them all. This website has very useful information on the different elements and other HTML tags: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/. 

## CSS

CSS is a hole I can get stuck in. There is so much I can learn and so much I can do. I really like how easy Bootstrap made creating the accordion. This webiste shows more information about the accordion, which was interesting. It also has information on other Bootstrap elements. https://getbootstrap.com/docs/5.0/components/accordion/. I also asked AI to help me understand the code in the CodePen. It's response is in accordion.md. However, Bootstrap edited the fonts for my text only on the page that I used Bootstrap on. I have found that I can manually override these settings in my styles. 

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
