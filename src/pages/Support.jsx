import { useRef } from "react";
import Form from "../components/Form/Form";
import Accordion from "../components/accordion/Accordion";
import CarParts from "../components/carparts/Parts";
import { FAQ } from "../Constants";

export default function Support() {
  let muffler = useRef();
  let turbo = useRef();
  let brakes = useRef();
  let coilover = useRef();

  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <>
      <div>
        <h1>How can we help you</h1>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Product Support</h2>
        <CarParts section={() => scrollTo(coilover)} />
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div>
          {FAQ.map((items) => (
            <Accordion
              key={items.id}
              title={items.question}
              content={items.answer}
            />
          ))}
        </div>
        <h2 style={{ textAlign: "center" }}>
          Still have questions?
          <br /> Contact us and we will get back to you!
        </h2>
        <Form />
      </div>
      <div ref={muffler} style={{ maxWidth: "300px" }}>
        <h2>Muffler</h2>
        <p>
          Ut lacinia, urna quis porttitor tincidunt, turpis purus egestas lacus,
          quis maximus ligula orci et lorem. Aenean porta faucibus odio, nec
          sollicitudin lectus tempus quis. Donec lacinia arcu velit, quis
          condimentum eros tempor sodales. Duis dictum odio at magna
          scelerisque, at pellentesque lorem porta. Aenean vulputate ultricies
          nulla sed mollis. Integer mattis, nunc et luctus tristique, risus dui
          mattis nisl, vitae iaculis enim tellus eu tellus. Integer non erat
          molestie, tincidunt dolor in, convallis sapien. Donec tempor eu augue
          a blandit. Nunc fringilla tempor ex, et dignissim tortor malesuada in.
          Nunc vestibulum, lectus quis facilisis hendrerit, leo ante fermentum
          nunc, at volutpat neque ligula sed eros. Proin et hendrerit mi, nec
          facilisis mauris. Phasellus nisl ante, fringilla in imperdiet sed,
          posuere at purus. Integer at urna suscipit, imperdiet risus tincidunt,
          aliquam leo. Donec tincidunt eros ac felis luctus mollis. Morbi porta
          massa ut eros viverra lacinia. In ultrices congue purus, vel
          consectetur urna condimentum vel.
        </p>
      </div>
      <div ref={turbo} style={{ maxWidth: "300px" }}>
        <h2>Turbo</h2>
        <p>
          Ut lacinia, urna quis porttitor tincidunt, turpis purus egestas lacus,
          quis maximus ligula orci et lorem. Aenean porta faucibus odio, nec
          sollicitudin lectus tempus quis. Donec lacinia arcu velit, quis
          condimentum eros tempor sodales. Duis dictum odio at magna
          scelerisque, at pellentesque lorem porta. Aenean vulputate ultricies
          nulla sed mollis. Integer mattis, nunc et luctus tristique, risus dui
          mattis nisl, vitae iaculis enim tellus eu tellus. Integer non erat
          molestie, tincidunt dolor in, convallis sapien. Donec tempor eu augue
          a blandit. Nunc fringilla tempor ex, et dignissim tortor malesuada in.
          Nunc vestibulum, lectus quis facilisis hendrerit, leo ante fermentum
          nunc, at volutpat neque ligula sed eros. Proin et hendrerit mi, nec
          facilisis mauris. Phasellus nisl ante, fringilla in imperdiet sed,
          posuere at purus. Integer at urna suscipit, imperdiet risus tincidunt,
          aliquam leo. Donec tincidunt eros ac felis luctus mollis. Morbi porta
          massa ut eros viverra lacinia. In ultrices congue purus, vel
          consectetur urna condimentum vel.
        </p>
      </div>
      <div ref={brakes} style={{ maxWidth: "300px" }}>
        <h2>Brakes</h2>
        <p>
          Ut lacinia, urna quis porttitor tincidunt, turpis purus egestas lacus,
          quis maximus ligula orci et lorem. Aenean porta faucibus odio, nec
          sollicitudin lectus tempus quis. Donec lacinia arcu velit, quis
          condimentum eros tempor sodales. Duis dictum odio at magna
          scelerisque, at pellentesque lorem porta. Aenean vulputate ultricies
          nulla sed mollis. Integer mattis, nunc et luctus tristique, risus dui
          mattis nisl, vitae iaculis enim tellus eu tellus. Integer non erat
          molestie, tincidunt dolor in, convallis sapien. Donec tempor eu augue
          a blandit. Nunc fringilla tempor ex, et dignissim tortor malesuada in.
          Nunc vestibulum, lectus quis facilisis hendrerit, leo ante fermentum
          nunc, at volutpat neque ligula sed eros. Proin et hendrerit mi, nec
          facilisis mauris. Phasellus nisl ante, fringilla in imperdiet sed,
          posuere at purus. Integer at urna suscipit, imperdiet risus tincidunt,
          aliquam leo. Donec tincidunt eros ac felis luctus mollis. Morbi porta
          massa ut eros viverra lacinia. In ultrices congue purus, vel
          consectetur urna condimentum vel.
        </p>
      </div>
      <div style={{ maxWidth: "300px" }}>
        <h2 ref={coilover}>Coilovers</h2>
        <p>
          Ut lacinia, urna quis porttitor tincidunt, turpis purus egestas lacus,
          quis maximus ligula orci et lorem. Aenean porta faucibus odio, nec
          sollicitudin lectus tempus quis. Donec lacinia arcu velit, quis
          condimentum eros tempor sodales. Duis dictum odio at magna
          scelerisque, at pellentesque lorem porta. Aenean vulputate ultricies
          nulla sed mollis. Integer mattis, nunc et luctus tristique, risus dui
          mattis nisl, vitae iaculis enim tellus eu tellus. Integer non erat
          molestie, tincidunt dolor in, convallis sapien. Donec tempor eu augue
          a blandit. Nunc fringilla tempor ex, et dignissim tortor malesuada in.
          Nunc vestibulum, lectus quis facilisis hendrerit, leo ante fermentum
          nunc, at volutpat neque ligula sed eros. Proin et hendrerit mi, nec
          facilisis mauris. Phasellus nisl ante, fringilla in imperdiet sed,
          posuere at purus. Integer at urna suscipit, imperdiet risus tincidunt,
          aliquam leo. Donec tincidunt eros ac felis luctus mollis. Morbi porta
          massa ut eros viverra lacinia. In ultrices congue purus, vel
          consectetur urna condimentum vel.
        </p>
      </div>
    </>
  );
}
