// chap21 1/19 pxxx
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ProductTableComponent } from "./components/productTable.component";
import { ProductFormComponent } from "./components/productForm.component";
import {ModelModule} from "./model/model.module";
import { CommonModule } from "./common/common.module";
import { componentsModule } from "./components/components.module";
import { PaDiscountDisplayComponent } from "./components/discountDisplay.component";
import { PaDiscountEditorComponent } from "./components/discountEditor.component";


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule, componentsModule],
    //declarations:[PaDiscountDisplayComponent, PaDiscountEditorComponent,
    //                ProductFormComponent, ProductTableComponent],
    
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }   
