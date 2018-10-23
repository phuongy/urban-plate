const viewportDefault = {
  from: '400px',
  to: '1000px'
}

export const fluidProps = ({
  property,
  value,
  viewport = viewportDefault,
}) => ({
  [`${property}`]: value.from,
  [`@media screen and (min-width: ${viewport.from})`]: {
    [`${property}`]: `calc(${value.from} + ${removeUnits(value.to) - removeUnits(value.from)} * ((100vw - ${viewport.from}) / ${removeUnits(viewport.to) - removeUnits(viewport.from)}))`
  },
  [`@media screen and (min-width: ${viewport.to})`]: {
    [`${property}`]: value.to
  }
});

const removeUnits = value => parseInt(value, 10);
