import { CommonModule } from "../common/common.module";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PaDiscountPipe } from "../common/discount.pipe";
import { PaDiscountAmountDirective } from "../common/discountAmount.directive";
import { PaIteratorDirective } from "../common/iterator.directive";
import { PaDisplayValueDirective } from "../common/valueDisplay.directive";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ProductFormComponent } from "./productForm.component";
import { ProductTableComponent } from "./productTable.component";



@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, ],
    declarations:[PaDiscountDisplayComponent, PaDiscountEditorComponent,
        ProductFormComponent, ProductTableComponent],
    exports: [ProductFormComponent,ProductTableComponent]
})
export class componentsModule{}