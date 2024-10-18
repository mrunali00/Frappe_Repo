# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class RideBooking(Document):
    def validate(self):  # Changed from validation to validate
        if not self.rate: 
            # frappe.throw("Please provide a rate")
            self.rate = frappe.db.get_single_value("Rentals Setting", "standard_rate")
        
        total_distance = 0
        for item in self.items:
            total_distance += item.distance

        self.total_amount = total_distance * self.rate