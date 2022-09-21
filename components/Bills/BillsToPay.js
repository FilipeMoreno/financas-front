import BillsComponent from '.'

export default function BillsToPayComponent({ hideValue }) {
  return (
    <>
      <BillsComponent type={'pay'} hideValue={hideValue} />
    </>
  )
}
