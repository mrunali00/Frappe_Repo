# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class Vehicle(WebsiteGenerator):
	# pass
	def before_save(self):
		self.set_title()
		# pass

	def set_title(self):
		self.title = f"{self.make} {self.model} ,{self.year}"