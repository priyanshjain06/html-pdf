import { writeFile } from 'fs/promises'
import { generatePdf } from '.'

const sampleHtml = `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<style media="screen">
  .show-on-print{
   display: none;
  }

  @media print {
    .show-on-print{
      display:block;
    }
    .hide-on-print{
      display: none;
    }
   }
</style>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
<div class="container" align="center">
  <form id="indentForm" autocomplete="on">
    <div class="row ">
      <div class="col-lg-4 col-4 brder">
        <h5 id="commonHeader" class="hide-on-print">Company Name</h5>
        <select class="dropDownIndent" id="outlet" name="outlet">
					<option>XYZ</option>
					</select>
      </div>
      <div class="col-lg-4 col-4">
        <h5 id="commonHeader">Company Code</h5>
        <input type="text" class="form-control dropDownIndent" value="E2156" name="outletCode" id="companyCode">

      </div>

    </div>
    <hr style="border: 1px solid #41451f">
    <button type="button" id="print" class="commonButton">
					<i class="fas fa-save"></i>&nbsp;Print
				</button>
    <div class="table-responsive" id="commonDvScroll">
      <table id="printIndentTable" class="table table-bordered table-hover ">
        <tr class="show-on-print"><th colspan="3"><h5>Company Name</h5></th></tr>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Salary</th>
        </tr>
        <tr>
          <td>Alfreds </td>
          <td>Futterkiste</td>
          <td class="text-right">5500</td>
        </tr>
        <tr>
          <td>Francisco</td>
          <td> Chang</td>
          <td class="text-right">7700</td>
        </tr>
        <tr>
          <td>Ernst </td>
          <td>Handel</td>
          <td class="text-right">2233</td>
        </tr>
        <tr>
          <td>Helen </td>
          <td> Bennett</td>
          <td class="text-right">4444</td>
        </tr>
        <tr>
          <td>Yoshi</td>
          <td> Tannamuri</td>
          <td class="text-right">6666</td>
        </tr>
        <tr>
          <td>Giovanni</td>
          <td> Rovelli</td>
          <td class="text-right">77</td>
        </tr>
      </table>
    </div>

  </form>
</div>`

const main = async () => {
  const pdf1 = await generatePdf({
    content: sampleHtml
  })

  await writeFile('sample1.pdf', pdf1)

  const pdf2 = await generatePdf({
    url: 'https://www.google.com'
  })

  await writeFile('sample2.pdf', pdf2)
}

main()
